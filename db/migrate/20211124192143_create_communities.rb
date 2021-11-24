class CreateCommunities < ActiveRecord::Migration[5.2]
  def change
    create_table :communities do |t|
      t.string :sub, null: false
      t.string :icon
      t.text :about, null: false

      t.timestamps
    end

    add_index :communities, :sub, unique: true
  end
end
