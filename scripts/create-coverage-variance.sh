#!/bin/bash

# List of spec files to potentially delete
SPECS=(
  "tests/nextjs/components/footer.spec.ts"
  "tests/nextjs/pages/home.spec.ts"
  "tests/nextjs/pages/photos.spec.ts"
  "tests/nextjs/pages/project.spec.ts"
)

echo "Creating coverage variance..."

# For each spec file, roll a random number and delete if less than 40
for spec in "${SPECS[@]}"; do
  if [ -f "$spec" ]; then
    # Generate random number between 0 and 99
    random=$((RANDOM % 100))
    if [ $random -lt 40 ]; then
      echo "Deleting $spec (rolled $random)"
      rm "$spec"
    else
      echo "Keeping $spec (rolled $random)"
    fi
  else
    echo "File not found: $spec"
  fi
done

echo "Coverage variance created!"
