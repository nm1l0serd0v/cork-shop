# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories_data = [
  { 
    title: 'Bag',
    image_path: File.join("client", "public", "images", "categories", "cat01.jpg")
  },
  { 
    title: 'Clocks',
    image_path: File.join("client", "public", "images", "categories", "cat02.jpg")
  },
  { 
    title: 'Shoes',
    image_path: File.join("client", "public", "images", "categories", "cat03.jpg")
  },
  { 
    title: 'Furniture',
    image_path: File.join("client", "public", "images", "categories", "cat04.jpg")
  },
]

product_data = [
  {
    name: 'Storage Box',
    price: 49,
    image_path: 'images/shop/th01.jpg',
    discount: true,
    discount_percentage: 10,
    discountPrice: 38.00
  },
  {
    name: 'Shoulder Bag',
    price: 125,
    image_path: 'images/shop/th02.jpg',
    discount: false,
  },
  {
    name: 'Glass Vase',
    price: 62.50,
    image_path: 'images/shop/th03.jpg',
    discount: false,
  },
  {
    name: 'Alarm Clock',
    price: 178,
    image_path: 'images/shop/th04.jpg',
    discount: false,
  },
  {
    name: 'Wall Clock',
    price: 59,
    image_path: 'images/shop/th05.jpg',
    discount: false,
  },
  {
    name: 'LED Lighting',
    price: 130,
    image_path: 'images/shop/th06.jpg',
    discount: false,
  },
  {
    name: 'Sunglasses',
    price: 99,
    image_path: 'images/shop/th07.jpg',
    discount: false,
  },
  {
    name: 'Hook Basket',
    price: 112.35,
    image_path: 'images/shop/th08.jpg',
    discount: false,
  },
  {
    name: 'Leather Case',
    price: 118,
    image_path: 'images/shop/th09.jpg',
    discount: false,
    rating: 10
  },
  {
    name: 'Concrete Lamp',
    price: 85.90,
    image_path: 'images/shop/th10.jpg',
    discount: false,
    rating: 10
  },
  {
    name: 'Stylish Chair',
    price: 417,
    image_path: 'images/shop/th11.jpg',
    discount: false,
    rating: 9
  },
  {
    name: 'Desktop Lighting',
    price: 245,
    image_path: 'images/shop/th12.jpg',
    discount: false,
    rating: 8
  },
  {
    name: 'Storage Jar',
    price: 19.80,
    image_path: 'images/shop/th13.jpg',
    discount: false,
    rating: 8
  },
  {
    name: 'Ceramic Watch',
    price: 299,
    image_path: 'images/shop/th14.jpg',
    discount: false,
    rating: 7
  },
  {
    name: 'Tissue Holder',
    price: 76.40,
    image_path: 'images/shop/th15.jpg',
    discount: false,
    rating: 7
  },
  {
    name: 'Pendant Lamp',
    price: 27,
    image_path: 'images/shop/th16.jpg',
    discount: false,
    rating: 6
  },
]

categories_data.each do |data|
  category = Category.new(title: data[:title])
  image = Image.create(file: File.open(data[:image_path]))
  category.images.push(image)
  category.save
end

product_data.each do |data|

end

