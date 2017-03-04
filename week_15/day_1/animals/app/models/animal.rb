class Animal < ActiveRecord::Base
  def move
    return "wat" if !legs
    return "walk" if legs > 0
    return "slither"
  end
end
