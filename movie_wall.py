# coding=utf-8
import os
import time
import logging
import json
from flask import Flask, redirect, url_for, send_from_directory
from flask import request, jsonify
from flask import Response

app = Flask(__name__)

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

@app.route('/')
def index():
    return redirect('/static/menu.html')

@app.route("/get_disk_dirs", methods=['GET'])
def get_disk_dirs_get():
    print("get_disk_dirs_get")
    disk = request.args.get('disk')
    dirs = ""
    root = os.getcwd() + "/static/menu/" + disk
    files = os.listdir(root)
    for file in files:
        # print(file)
        # sub_path = os.path.join(root, file)
        if file.endswith(".png") | file.endswith(".jpg"):
            if (dirs == ""):
                dirs = dirs + file
            else:
                dirs = dirs + ";" + file
    return dirs

@app.route("/find_dirs", methods=['GET'])
def find_dirs_get():
    disk = request.args.get('disk')
    menu = request.args.get('menu')
    dirs = ""
    print("find_dirs_get")
    root = os.getcwd() + "/static/movies/"+disk+"/"+menu
    files = os.listdir(root)
    for file in files:
        # print(file)
        sub_path = os.path.join(root, file)
        if (os.path.isdir(sub_path)):
            # h = os.path.split(sub_path)
            if (dirs == ""):
                dirs = dirs + file
            else:
                dirs = dirs + ";" + file
    return dirs


def main():
    logging.info("server start")
    debug = False
    processes = 1
    threaded = True
    # port = int(os.environ['main_port'])
    port = 18888
    print("Server start...")
    app.run(host='0.0.0.0', port=port, debug=debug, threaded=threaded, processes=processes)
    


if __name__ == '__main__':
    main()

# http://203.195.170.137:18888/static/menu.html
# http://localhost:18888/static/menu.html
# Ctrl + F5 强制刷新CSS和JS
# 本地：E:
# cd Github\movie_wall
# python main.py