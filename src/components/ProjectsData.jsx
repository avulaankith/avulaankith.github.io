const projects = [
    {
        title: "TWITTER SENTIMENT ANALYSIS",
        description: [
            'Led the development and implementation of various deep learning models (including BERT, CNN, LSTM, BiLSTM) for sentiment analysis on Twitter data. Explored combinations of these models such as BERT-CNN, BERT-LSTM, and BERT-BiLSTM to predict sentiments (positive, negative, neutral, and irrelevant) associated with Twitter entities.',
            'Conducted extensive experimentation and analysis using Jupyter Notebooks to fine-tune models and enhance sentiment classification performance. Explored the integration of BERT embeddings with different architectures and tested multiple model combinations (CNN, LSTM, BiLSTM) to optimize sentiment analysis results.',
            'Collaborated with a team to drive the project\'s success, contributing to its development and analysis.'
        ],
        imageSrc: "images/twitter-image.jpeg",
        altText: "Twitter Logo",
        githubLink: "https://github.com/avulaankith/Twitter-Sentiment-Analysis",
        imageClass: "portfolio-image"
    },
    {
        title: "TRAFFIC AWARE SCALING OPTIMIZATION IN OPENFAAS",
        description: [
            'Proposed and Implemented a traffic aware scaling algorithm for the OpenFaaS platform for changing the static parameters during scaling.',
            'Improved run times and request handling by 30% for Data Science Functions written in the Function-as-a-service model in the OpenFaaS framework.',
            'Reduced the response time in the proposed design by 50% compared to time taken in Default Static Scaling implementation.',
        ],
        imageSrc: "images/opfaas.jpg",
        altText: "OpenFaaS Logo",
        imageClass: "portfolio-image2"
    },
    {
        title: "MULTI-LABEL CLASSIFICATION FOR LAND COVER DETECTION",
        description: [
            'Executed a Transfer learning approach to identify the land cover features from a given multi-spectral image consisting of 12 bands from Sentinel-2 Satellite.',
            'Analyzed the raster bands reactivity to different land forms based on resolutions',
            'Obtained a recall of 63.80 for all the bands and a recall of 63.00 when used the RGB bands for prediction.'
        ],
        imageSrc: "images/multi-label-classification.png",
        altText: "Multi label classification",
        githubLink: "https://github.com/avulaankith/BigEarthNet",
        imageClass: "portfolio-image2"
    },
    {
        title: "MULTI-THREADED FILE SYNC SYSTEM",
        description: [
            'Created a Python-based system enabling seamless file operations (upload, download, rename, delete) between client and server using RPC based communication Protocols.',
            'Designed and integrated a helper thread automating file creation, modification, and deletion processes between the client and server. Employed asynchronous communication for optimized handling of file tasks, enhancing system efficiency.',
            'Developed synchronous and asynchronous communication functionalities between the client and server.'
        ],
        imageSrc: "images/multi-threaded-file-sync.webp",
        altText: "Multi threaded file sync",
        imageClass: "portfolio-image"
    },
    {
        title: "Sparse Matrix Multiplication Implementations in Big Data Environments",
        description: [
            'Implemented matrix multiplication algorithms across multiple big data platforms, including Hadoop, Spark Scala, Pig, and Hive.',
            'Developed two versions of the matrix multiplication algorithm in hadoop: a version using one mapper and reducer for another version with two mappers and reducers.',
        ],
        imageSrc: "images/matrix_mul.png",
        altText: "Matrix Multiplication",
        imageClass: "portfolio-image2"
    },
    {
        title: "Fault-Tolerant Implementation of Two-Phase Commit Protocol in Distributed Systems",
        description: [
            'The project demonstrates the implementation of the Two-Phase Commit Protocol in a Python-based distributed system, focusing on testing its fault tolerance through various simulated failure scenarios.',
            'Utilizing Python threads, the project achieves concurrent execution of server processes and maintains consistent inter-server communication via XMLRPC, demonstrating effective management of distributed nodes.',
            'The project provided practical insights into the complexities of distributed systems, highlighting the importance of thread management and fault tolerance, while overcoming challenges related to concurrent server operations and runtime issues.'
        ],
        imageSrc: "images/2pc.png",
        altText: "Two Phase Commit",
        imageClass: "portfolio-image"
    },
    {
        title: "NEIGHBOURHOOD ANALYSIS USING PYTHON",
        description: [
            'Analyzed the neighborhoods of New York City and identified areas with high potential for Indian Cuisine Restaurants.',
            'Identified localities preferable to live where Indian Cuisine Restaurants are available using a rating scale of 10.',
        ],
        imageSrc: "images/nymap.png",
        altText: "New York City Map",
        imageClass: "portfolio-image3",
        githubLink: "https://github.com/avulaankith/Neighbourhood-Analysis",
    },
    {
        title: "OCULAR DISEASE DETECTION WEB APPLICATION",
        description: [
            'Developed a web application using Flask for user dashboard functionality and cataract prediction specifically focusing on cataract-positive cases for prediction.',
            'Implemented a Transfer Learning approach to train the customized VGG-16 model using Pytorch with an accuracy of 97%.',
        ],
        imageSrc: "images/eye.jpeg",
        altText: "Human Eye",
        imageClass: "portfolio-image2",
        githubLink: "https://github.com/avulaankith/Ocular-Disease-Detection-Web-Application",
    },
    {
        title: "BLOGGING WEBSITE",
        description: [
            'Spearheaded the development of a Blogging Website using HTML, CSS, JavaScript, PHP, and MySQL. Implemented user authentication, message posting, and reply functionalities.',
            'Orchestrated the deployment of the website on a local server using XAMPP, facilitating Apache and MySQL server management.',
            'Collaborated with a team to create a blogging platform with robust features, incorporating user authentication, message posting, and reply functionalities.',
        ],
        imageSrc: "images/blogging-website.png",
        altText: "Blogging Website",
        imageClass: "portfolio-image",
        githubLink: "https://github.com/avulaankith/Blogging-Website",
    },
    {
        title: "PREMIER LEAGUE RESULT PREDICTION",
        description: [
            'Predicted match results by taking the history of respective teams, the venue of the match, and the season of the IPL series with an accuracy of 99%.',
        ],
        imageSrc: "images/IPL-Toss-Prediction.png",
        altText: "Leage Prediction",
        imageClass: "portfolio-image3",
        githubLink: "https://github.com/avulaankith/IPL-Toss-Prediction",
    },
    {
        title: "HEART FAILURE RATE PREDICTION",
        description: [
            'Developed a heart failure rate prediction model using PyTorch, leveraging the ”Heart Failure Clinical Records Dataset” from Kaggle, encompassing diverse clinical features indicative of heart health.',
        ],
        imageSrc: "images/heart.jpeg",
        altText: "Leage Prediction",
        imageClass: "portfolio-image3",
        githubLink: "https://github.com/avulaankith/Heart-Failure-Rate",
    },
    {
        title: "PyDTL: Decision Tree Learning & Random Forests Implementation in Python",
        description: [
            'Developed a Python script (dtree.py) that enables Decision Tree Learning with Information Gain and entropy-based attribute selection. It offers flexibility with optimized or randomized attribute selection for constructing decision trees, facilitating diverse decision-making approaches.',
            'Implemented ensemble learning by creating Random Forests of 3 or 15 trees, utilizing randomized attribute selection within individual trees. Improved predictive accuracy by aggregating predictions from multiple trees, enabling more robust and accurate modeling.',
            'The program produces comprehensive output (output.txt) capturing predictions, true classes, and classification accuracy for test data. It enables thorough evaluation and analysis, providing insights into the effectiveness of various tree construction modes and forest sizes for predictive tasks.',
        ],
    },
    {
        title: "Extended Nim Game Solver: Red and Blue Ball Edition with Minimax Algorithm using Alpha Beta Pruning",
        description: [
            'Developed a Nim game variant involving red and blue balls represented as bags. Implemented functions to manipulate the game state, remove balls from bags, and assess terminal states.',
            'Implemented two versions of the minimax algorithm (standard and misere) for decision-making in the game. Utilized alpha-beta pruning to optimize the search space, enhancing computational efficiency.',
            'Created a command-line interface allowing users to set initial game parameters (number of red and blue balls, game version, player type) and, optionally, the depth for alpha-beta pruning. Provided flexibility for users to interact with the game, allowing both human and computer players with varied game settings.',
        ],
    },
    {
        title: "Solving Eight Puzzle Problem using State Space Search",
        description: [
            'The project is about implementing various search algorithms to find the optimal solution from the start state to the goal state. Algorithms like Breadth First Search (bfs), Depth First Search (dfs), Uniform Cost Search (ucs), Depth Limited Search (dls), Iteratively Deepening Search (ids), AStar Search (astar), and Greedy Search (greedy) are coded to navigate through the puzzle states.',
        ],
    },
    {
        title: "Toy Search Engine",
        description: [
            'Implemented a toy search engine on a corpus of US inaugural addresses of presidents by generating TF-IDF vectors for the speeches.',
            'The program returns the speech with the highest cosine similarity score for a given query.',
        ],
    },
    // ... Add more project objects as needed ...
];

export default projects;
