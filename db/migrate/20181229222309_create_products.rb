class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string  :title
      t.integer :price
      t.boolean :discount
      t.string  :short_description
      t.integer :rating
      t.integer :category_id
      t.integer :discount_percentage

      t.text :full_descrpition

      t.timestamps
    end
  end
end
