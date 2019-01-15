namespace :products do
  desc "Example of a task with prerequisites"
  task import_simple: :environment do
    data = File.open('tmp/products.yaml') { |file| file.read }

    YAML.load(data).each do |product_data|
      images_path = "tmp/product_images/#{product_data[:id]}"

      product = Spree::Product.new(
        name: product_data[:basic][:title].strip,
        description: product_data[:basic][:description],
        price: product_data[:basic][:price].to_f
        available_on: Time.zone.now

      )

      product.shipping_category = Spree::ShippingCategory.last
      taxon = Spree::Taxon.find_by(
        name: product_data[:basic][:category_name].strip
      )
      product.taxons.push(taxon)

      product.save
      puts "Saved product - #{product.id}"

      Dir.entries(images_path).sort.each do |filename|
        next if filename == '.' || filename == '..'

        file = File.open("#{Rails.root}/#{images_path}/#{filename}")
        image = Spree::Image.create!(attachment: { io: file, filename: filename })
        product.images << image
      end
    end
  end
end
