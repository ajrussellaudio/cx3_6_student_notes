class Wizard

  attr_reader :name, :wand

  def initialize(name, wand)
    @name = name
    @wand = wand
  end

  def cast_spell(spell_name)
    @wand.cast(spell_name)
  end

end