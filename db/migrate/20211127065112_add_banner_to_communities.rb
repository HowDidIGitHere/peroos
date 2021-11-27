class AddBannerToCommunities < ActiveRecord::Migration[5.2]
  def change
    add_column :communities, :banner, :string
  end
end
