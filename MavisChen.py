#!/usr/bin/python
#coding:utf-8

from flask import Flask,flash,render_template,request

app = Flask(__name__)


@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/project')
def project():
    return render_template('project.html')

@app.route('/education')
def education():
    return render_template('education.html')

@app.route('/skill')
def skill():
    return render_template('skill.html')

@app.route('/recommendation')
def recommendation():
    return render_template('recommendation.html')



if __name__ == '__main__':
    app.run()
