require_relative "./person"

class Healer < Person

  def heal
    @health += 10
  end

  def talk
    return "Hello, everybody. I'm Dr #{@last_name}."
  end

end