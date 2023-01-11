#!/bin/bash

sed -i'.temp' -e 's/<\/loc>/\/<\/loc>/g' ./build/sitemap.xml
sed -i'.temp' -e 's/www.bulktexterpro.com\/\/<\/loc>/www.bulktexterpro.com<\/loc>/g' ./build/sitemap.xml
rm ./build/sitemap.xml.temp
