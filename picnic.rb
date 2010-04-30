require 'rubygems'
require 'sinatra'

get '/' do
  haml :picnic
end

post '/fetch' do
end

#get '/sorter' do
#end
