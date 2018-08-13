from flask import Flask,render_template

app= Flask(__name__,static_folder='/home/shri/tangle/client/dist',static_url_path='/home/shri/tangle/client/dist',template_folder='../../client')
app.config['STATIC_FOLDER']='/home/shri/tangle/client/images'

#route to '/'
@app.route('/')
def data():
    return render_template('home.html')
@app.route('/login')
def login():
    return render_template('home.html')
