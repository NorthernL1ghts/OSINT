import requests
import csv
import subprocess
import sys
import logging as log
from bs4 import BeautifulSoup

URL = "https://realpython.github.io/fake-jobs/" # This is website that you want to scrape. Using a test URL.
page = requests.get(URL) # Get requests.

soup = BeautifulSoup(page.content, "html.parser") # Parse the content.

# Find Elements by ID:
results = soup.find(id="ResultsContainer")

# Beautify: 
print(results.prettify())

# Find Elements by HTML Class Name
job_elements = results.find_all("div", class_="card-content")

# Take a look at all of them:
for job_element in job_elements:
    print(job_element, end="\n"*2)

# Beautify HTML:
# for job_element in job_elements:
#     title_element = job_element.find("h2", class_="title")
#     company_element = job_element.find("h3", class_="company")
#     location_element = job_element.find("p", class_="location")
#     print(title_element)
#     print(company_element)
#     print(location_element)
#     print()

# Extract Text From HTML Elements
# for job_element in job_elements:
#     title_element = job_element.find("h2", class_="title")
#     company_element = job_element.find("h3", class_="company")
#     location_element = job_element.find("p", class_="location")
#     print(title_element.text)
#     print(company_element.text)
#     print(location_element.text)
#     print()

# Extract Text From HTML Elements without the irrelevant "whitespace".
for job_element in job_elements:
    title_element = job_element.find("h2", class_="title")
    company_element = job_element.find("h3", class_="company")
    location_element = job_element.find("p", class_="location")
    print(title_element.text.strip())
    print(company_element.text.strip())
    print(location_element.text.strip())
    print()