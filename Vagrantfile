Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.hostname = "rabbitmq"
  config.vm.network "forwarded_port", guest: 15672, host: 15672
  config.vm.network "forwarded_port", guest: 5672, host: 5672
end
