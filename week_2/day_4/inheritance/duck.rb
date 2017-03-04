require_relative "./bird"

class Duck < Bird

  def fly 
    bird_flying = super()
    return "duck #{ bird_flying }"
  end
  
end