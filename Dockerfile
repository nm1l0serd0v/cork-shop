FROM ruby:2.5.0

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install -y --no-install-recommends \
  build-essential \
  libpq-dev \
  nodejs \
  yarn \
  locales \
  g++ \
  gcc \
  libc6-dev \
  make \
  pkg-config \
  imagemagick \
  && rm -rf /var/lib/apt/lists/*

RUN sed -i -e 's/# ru_RU.UTF-8 UTF-8/ru_RU.UTF-8 UTF-8/' /etc/locale.gen && \
  sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
  locale-gen && \
  update-locale LANG=ru_RU.UTF-8 && \
  echo "LANGUAGE=ru_RU.UTF-8" >> /etc/default/locale && \
  echo "LC_ALL=ru_RU.UTF-8" >> /etc/default/locale

WORKDIR /store

COPY Gemfile* /store/

RUN gem install bundler
RUN bundle install --jobs=20 --retry=5 --without test

EXPOSE 3000 4000

COPY . /store

ARG RAILS_ENV
ARG RAILS_MASTER_KEY
# RUN bundle exec rake DATABASE_URL=postgresql:mock
# RUN bundle exec rake DATABASE_URL=postgresql:mock assets:precompile

ENTRYPOINT ["/store/docker-rails-entrypoint.prod.sh"]

CMD bundle exec rails s -p 3000 -b 0.0.0.0
