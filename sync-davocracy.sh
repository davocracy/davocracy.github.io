#!/bin/bash

rsync -rtvuz --delete --progress $(pwd)/ root@46.101.224.110:/var/www/html/