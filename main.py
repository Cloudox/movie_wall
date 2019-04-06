# coding=utf-8
import os
import time
import logging
import json
from flask import Flask
from flask import request, jsonify
from flask import Response

app = Flask(__name__)
@app.route("/find_dirs", methods=['GET'])
def find_dirs_get():
    dirs = ""
    print("get")
    root = os.getcwd() + "\static\movies"
    files = os.listdir(root)
    for file in files:
        print(file)
        sub_path = os.path.join(root, file)
        if (os.path.isdir(sub_path)):
            # h = os.path.split(sub_path)
            if (dirs == ""):
                dirs = dirs + file
            else:
                dirs = dirs + "," + file
    return str(dirs)


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

# http://203.195.170.137:18888/static/index.html
# http://localhost:18888/static/detail.html
# Ctrl + F5 强制刷新CSS和JS
# 本地：python E:\Github\movie_wall\main.py