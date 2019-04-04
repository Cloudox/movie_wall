# coding=utf-8
import os
import time
import logging
import json
from flask import Flask
from flask import request, jsonify
from flask import Response

app = Flask(__name__)

def main():
    logging.info("server start")
    debug = False
    processes = 1
    threaded = True
    # port = int(os.environ['main_port'])
    port = 18888
    app.run(host='0.0.0.0', port=port, debug=debug, threaded=threaded, processes=processes)


if __name__ == '__main__':
    main()