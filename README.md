<h1>Exoplanet Webapp</h1>
<hr>
This repository contains a webapp project for <a href="https://hackbenchers-2.hackerearth.com/">hackbenchers-2</a>
hackathon at <a href="https://www.hackerearth.com">HackerEarth</a>.
<p>
  The webiste is live and available at this <a href="https://exoplanet-hackerearth-app.herokuapp.com/">link</a>.
  <br>
  The website is hosted on heroku free server and hence the visualisations may take longer to load.
</p>
<p>
  <h4>File Structure</h4>
  The file structure is as follows: <br>
  <br>
  <ol>
    <li>
      data
      <ul>
        <li>open-exoplanet-cataloguec4f9fb7
          <ul>
            <li>oec.csv (containing the original dataset)</li>
          </ul>
        </li>
        <li>
          horizons_results(1).csv (containing the dataset with solar data which was used in the analysis)
        </li>
      </ul>
    </li>
    <li>
      final_analysis (containing the respective datasets having the data obtained after specific operations)
    </li>
    <li>
      node-app (contains the web app code)
    </li>
    <li>Repo (containing the jupyter notebook having the analysis)</li>
  </ol>
</p>
<p>
  The analysis is completely done in python. <a href="https://plot.ly/">Plotly</a> has been used to visualise the data. <br>
  The web app is made with <a href="https://nodejs.org/">nodejs</a> as the backend.
  The dependencies are in requirements.txt
</p>
