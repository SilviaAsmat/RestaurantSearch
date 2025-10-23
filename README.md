# RestaurantSearch

A Ruby on Rails API with a React front end that uses the Google Places API to let the user search for restaurants.

## Now Deployed!
https://whatsforlunch-rj9z.onrender.com/restaurants

## Getting Started
### Install Ruby on Rails and React
Rails 8.0.3, ruby 3.4.6, and react 19.2.0 were used --- follow the guides to install on your local machine
https://guides.rubyonrails.org/install_ruby_on_rails.html

https://react.dev/learn/installation
### Dependencies
Used  rack-cors -v 2.0.2 for cross-domain requests.
```
gem install
```
```
bundle install
```
Used @mui/material @emotion/react @emotion/ to use exisitng common components.

Used react-router-dom for routing capabilities.
```
npm install 
```

### Installing

Clone the repository and in this file 

```RestaurantDiscovery/restaurant-discovery-api/config/environments/development.rb```

Add your google places api key:

```config.google_places_api_key = YOUR_API_KEY```

### Executing program


* In the terminal, navigate to ```restaurant-discovery-api```
  * Run
    ```
    rails server
    ```
  * The server will run on localhost:3000
* Navigate to ```restaurant-discovery-frontend```
  * Run
    ```
    npm install
    ```

    then
   
    ```
    npm start
    ```
  * The frontend will run on localhost:3002

