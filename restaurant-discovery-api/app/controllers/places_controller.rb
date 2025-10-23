require 'uri'
require 'net/http'
require 'json'

class PlacesController < ApplicationController

  def search
    search_base_url = Rails.configuration.places_base_url + '/textsearch/json'
    photo_base_url = Rails.configuration.places_base_url + '/photo'
    api_key = Rails.configuration.google_places_api_key

    query_params = {
      query: params[:query],
      radius: params[:radius],
      type: params[:type],
      key: api_key
    }
    
    uri = URI(search_base_url)
    uri.query = URI.encode_www_form(query_params)
    response = Net::HTTP.get_response(uri)

    if response.is_a?(Net::HTTPSuccess)
      parsed_data = JSON.parse(response.body)

      mappedResults = parsed_data["results"].map { |item|
        generatedImageUrl = "#{photo_base_url}?photo_reference=#{item['photos'][0]['photo_reference']}&key=#{api_key}&maxheight=500"
        {
          id: item['place_id'],
          name: item['name'],
          address: item['formatted_address'],
          imageUrl: generatedImageUrl
        }
      }
      render json: {
        status: "success",
        results: mappedResults,
      }, status: :ok
    else
      render json: { status: "error", message: "Failed to fetch data" }, status: :bad_request
    end
  end
end
