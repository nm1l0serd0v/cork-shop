class User < ApplicationRecord
  include Spree::UserMethods
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_and_belongs_to_many :spree_roles, class_name: 'Spree::Role', join_table: 'spree_role_users'
end
