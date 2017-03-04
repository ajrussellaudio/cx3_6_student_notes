## ARRAY

pincodes = [
  ["Kiyo", 4592],
  ["Sian", 9341],
  ["Michael", 1234]
]

for data in pincodes
  if data[0] == "Sian"
    return [1]
  end
end

# time complexity O(n)

## HASH

pincodes = {
  "Kiyo" => 4592,
  "Sian" => 9341,
  "Michael" => 1234
}

pincodes["Sian"]

# time complexity O(1)