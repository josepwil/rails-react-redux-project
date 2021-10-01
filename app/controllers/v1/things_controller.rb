class V1::ThingsController < ApplicationController
  def index
    render json: { :things => [
      {
        :name => 'some-thing',
        :guid => '001212-sad3-awda33-sdaad'
      }
    ] }.to_json
  end
end