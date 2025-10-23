require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  test "registers a new user" do
    user_params = { user: { name: 'New User', email: 'new@example.com', password: 'new_password' } }
    post '/register', params: user_params
    assert_response :created
    body = JSON.parse(response.body)
    assert_equal 'New User', body['name']
    assert_equal 'new@example.com', body['email']
    assert_equal 'new_password', body['password']
  end

  test "registration fails for existing user" do
    existing = users(:test_user)
    post '/register', params: { user: { name: existing.name, email: existing.email, password: existing.password } }
    assert_response :unprocessable_entity
    body = JSON.parse(response.body)
    assert_includes body['errorMessage'], 'User already exists'
  end

  test "login succeeds with correct credentials" do
    test_user = users(:test_user)
    post '/login', params: { email: test_user.email, password: test_user.password }
    assert_response :success
  end

  test "login fails with incorrect password" do
    test_user = users(:test_user)
    post '/login', params: { email: test_user.email, password: 'incorrect_password' }
    assert_response :unprocessable_entity
  end

  test "login fails with incorrect email" do
    test_user = users(:test_user)
    post '/login', params: { email: "incorrect@email.com", password: test_user.password }
    assert_response :unprocessable_entity
  end
end
