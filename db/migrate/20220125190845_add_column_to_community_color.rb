class AddColumnToCommunityColor < ActiveRecord::Migration[5.2]
  def change
    add_column :communities, :color, :string
  end
end
