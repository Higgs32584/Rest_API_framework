from bs4 import BeautifulSoup
import requests

new_request = requests.get("https://a-z-animals.com/search/Zebra")

soup= BeautifulSoup(new_request.text,features="html.parser")

description = soup.find_all("p")[0].text


