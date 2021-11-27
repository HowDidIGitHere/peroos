class RemoveNullFalseOnAbout < ActiveRecord::Migration[5.2]
  def change
    remove_column :communities, :about
    add_column :communities, :about, :string
  end
end
