class User < ActiveRecord::Base
validates :username, :password_digest, :session_token, presence: true
validates :password, length: {minimum: 6, allow_nil: true}
validates :username, :session_token, uniqueness: true

attr_reader :password

def self.generate_session_token
  SecureRandom::urlsafe_base64(16)
end

def reset_session_token!
  self.session_token = User.generate_session_token
  self.save!
  self.session_token
end

def ensure_session_token
  self.session_token ||= User.generate_session_token
end

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
  BCrypt::Password.new(self.password_digest).is_password?(password)
end

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)
  if user && user.is_password?(password)
    return user
  else
    return nil
  end
end

end