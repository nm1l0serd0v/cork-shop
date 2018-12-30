class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.string :title

      t.timestamps
    end

    create_table :images do |t|
      t.string :file
      t.references :imageable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
