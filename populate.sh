#!/bin/bash

# Prompt the user for the number of days
echo "How many days back do you want to run? (Enter a number)"
read days_back

# Validate input
if ! [[ "$days_back" =~ ^[0-9]+$ ]]; then
    echo "Error: Please enter a valid number."
    exit 1
fi

# Prompt for record ID and project ID
echo "Enter the record ID:"
read record_id

echo "Enter the project ID:"
read project_id

for ((i=days_back; i>=1; i--)); do
    echo "Running for -$i days"

    faketime "-$i days" node scripts/fake-git-data/fake-git-data.js

    CURRENTS_API_URL=https://cy-staging.currents.dev faketime "-$i days" npx pwc --key "$record_id" --project-id "$project_id" --project web-app 
    CURRENTS_API_URL=https://cy-staging.currents.dev faketime "-$i days" npx pwc --key "$record_id" --project-id "$project_id" --project docs 
    CURRENTS_API_URL=https://cy-staging.currents.dev faketime "-$i days" npx pwc --key "$record_id" --project-id "$project_id" --project landing-page 
    CURRENTS_API_URL=https://cy-staging.currents.dev faketime "-$i days" npx pwc --key "$record_id" --project-id "$project_id"
    # Reset snapshots
    git checkout -- .
done
