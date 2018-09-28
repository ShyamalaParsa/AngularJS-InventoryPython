#!flask/bin/python
#!/usr/bin/env python2
# -*- coding: utf-8 -*-
"""
Created on Mon Mar  5 11:39:43 2018

@author: OJAS innovative technologies
"""
from flask import Flask, jsonify, abort, make_response, request,session,g

from flask_restful import reqparse
from flask_restful import Resource, Api

import kaptan
import os
import time
import logging
import pymysql
import json
import logging.config
from uuid import uuid4
import sys

from routes.book import Book, Department, BookList, BookAllocate, Readers, \
						BookAllocateList, AvailableBooks, RequestBook, \
						AssignBooks, MyBooks

from routes.inventory import Inventories, InventoryList, MyInventory, \
							 	VendorAddress, DeviceDetails, ProductBrand, \
							 	TotalInventoryDetails, AllotedDetails, AvailableDetails

from routes.allocate import InventoryAllocation, AllocationList, DeviceList, \
							RequestForReplace

from routes.auth import UserRole, AddUser, UserLogin, UserLogout, \
						ForgotPassword, ChangePassword, ResetPassword, \
						ProfilePicture

app = Flask(__name__)
key = uuid4().hex
app.secret_key = key

config = kaptan.Kaptan(handler = "json")
config.import_config(os.getenv("CONFIG_FILE_PATH", 'config.json'))
environment = config.get('environment')

api = Api(app)
logger = logging.getLogger(__name__)


def connect_db():
	"""Connects to the specific database."""
	
	try:
		db = pymysql.connect(host = config.get('dbhost'),  # your host, usually localhost
							 user = config.get("dbuser"),  # your username
						     passwd = config.get("dbpass"),  # your password
						 	 db = config.get("dbname"), 
						 	 cursorclass = pymysql.cursors.DictCursor,
						 	 sql_mode = "STRICT_TRANS_TABLES")  # name of the data base
		return db
	
	except:
		logger.error('Failed to Connect to the database', exc_info=True)
		sys.exit("not able to connect to database")


def get_db():
	"""Opens a new database connection if there is none yet for the
	current application context.
	"""
	if not hasattr(g, 'appdb'):
		g.appdb = connect_db()
	return g.appdb


@app.before_request
def before_request():
	g.appdb = get_db()
	setEmailRequirements()
	

@app.teardown_request
def teardown_request(exception):
	
	if hasattr(g, 'appdb'):
		g.appdb.close()


@app.before_first_request
def setup_logging(default_path = 'logconf.json', default_level = logging.INFO, 
					env_key = 'LOG_CFG_PATH'):
	"""Setup logging configuration"""
	
	path = default_path
	value = os.getenv(env_key, None)
	if value:
		path = value
	if os.path.exists(path):
		with open(path, 'rt') as f:
			config = json.load(f)
		logging.config.dictConfig(config)
	else:
		logging.basicConfig(level = default_level)

def setEmailRequirements():
	
	if not hasattr(g, 'config'):
		g.config = config

@app.route('/')
def hello():
	
	return '<h1>Welcome to Inventory Application</h1>'

#: URLs
api.add_resource(Department, '/department', endpoint = 'Department')
api.add_resource(Book, '/book', endpoint = 'Book')
api.add_resource(BookList, '/booklist', endpoint = 'BookList')
api.add_resource(BookAllocate, '/bookallocate', endpoint = 'BookAllocate')
api.add_resource(BookAllocateList, '/bookallocatelist', endpoint = 'BookAllocateList')
api.add_resource(AvailableBooks, '/availablebooks', endpoint = 'AvailableBooks')
api.add_resource(RequestBook, '/requestbook', endpoint = 'RequestBook')
api.add_resource(AssignBooks, '/assignbooks', endpoint = 'AssignBooks')
api.add_resource(MyBooks, '/mybooks', endpoint = 'MyBooks')
api.add_resource(Readers, '/readers', endpoint = 'Readers')


api.add_resource(Inventories, '/inventories', endpoint = 'Inventories')
api.add_resource(Inventories, '/deleteinventory/<int:inventory_id>', 
					methods = ['DELETE'])
api.add_resource(InventoryList, '/inventory', endpoint = 'InventoryList')
api.add_resource(DeviceList, '/devicelist', endpoint = 'DeviceList')
api.add_resource(MyInventory, '/myinventory', endpoint = 'MyInventory')
api.add_resource(VendorAddress, '/vendoraddress', endpoint = 'VendorAddress')
api.add_resource(DeviceDetails, '/devicedetails', endpoint = 'DeviceDetails')
api.add_resource(ProductBrand, '/productbrand', endpoint = 'ProductBrand')
api.add_resource(TotalInventoryDetails, '/inventorydetails', endpoint = 'TotalInventoryDetails')
api.add_resource(AllotedDetails, '/alloted', endpoint = 'AllotedDetails')
api.add_resource(AvailableDetails, '/available', endpoint = 'AvailableDetails')


api.add_resource(InventoryAllocation, '/allocate', endpoint = 'InventoryAllocation')
api.add_resource(InventoryAllocation, '/deleteallocation/<int:allocation_id>', 
					methods = ['DELETE'])
api.add_resource(AllocationList, '/allocatelist', endpoint = 'AllocationList')
api.add_resource(RequestForReplace, '/replace', endpoint = 'RequestForReplace')


api.add_resource(UserRole, '/roles', endpoint = 'Userrole')
api.add_resource(AddUser, '/adduser', endpoint = 'AddUser')
api.add_resource(ProfilePicture, '/profilepicture', methods = ['PUT','GET'])
api.add_resource(AddUser, '/relieveemployee/<int:employeeId>', methods = ['DELETE'])
api.add_resource(UserLogin, '/login', endpoint = 'UserLogin')
api.add_resource(UserLogout, '/logout/<string:username>', methods = ['DELETE'])
api.add_resource(ForgotPassword, '/forgotpassword', endpoint = 'ForgotPassword')
api.add_resource(ChangePassword, '/changepassword', endpoint = 'ChangePassword')
api.add_resource(ResetPassword, '/resetpassword', endpoint = 'ResetPassword')

def get_file_params(filename):
	
	filepath = g.config.get("logfiles") + '/'+filename
	with open(filepath, 'r') as f:
		content = f.read()
	return content


if __name__ == '__main__':
	
	app.run(host = config.get("host"), debug = config.get("debug"), 
			threaded = True, port = config.get("port"))
	


