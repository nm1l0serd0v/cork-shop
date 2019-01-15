# Configure Spree Preferences
#
# Note: Initializing preferences available within the Admin will overwrite any changes that were made through the user interface when you restart.
#       If you would like users to be able to update a setting with the Admin it should NOT be set here.
#
# Note: If a preference is set here it will be stored within the cache & database upon initialization.
#       Just removing an entry from this initializer will not make the preference value go away.
#       Instead you must either set a new value or remove entry, clear cache, and remove database entry.
#
# In order to initialize a setting do:
# config.setting_name = 'new value'
Spree.config do |config|
  # Example:
  # Uncomment to stop tracking inventory levels in the application
  # config.track_inventory_levels = false
end

require 'carmen'
Carmen.i18n_backend.locale = :ru

Spree::Api::Config[:requires_authentication] = false

Spree.user_class = "User"

Rails.application.config.to_prepare do
  require_dependency 'spree/authentication_helpers'
end

# Deface::Override.new(
#   virtual_path: 'spree/admin/shared/_order_summary',    
#   name:         'admin_order_custom_details',
#   insert_after: 'header#order_tab_summary > dl.additional-info',
#   partial:      'spree/admin/shared/admin_order_custom_details'
# )
