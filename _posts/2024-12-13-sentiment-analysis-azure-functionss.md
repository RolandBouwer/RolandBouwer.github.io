---
title: "Sentiment Analysis API with Azure Functions"
published: true
---

# Build a Sentiment Analysis API using Python and Azure Functions V2

This blog post guides you through creating a serverless HTTP API using Azure Functions V2, Python, and the VADER Sentiment Analysis library. The API will analyze a sentence and return its sentiment (positive or negative).

[GitHub Repository](https://github.com/RolandBouwer/Sentiment-Analysis-Azure-Functions)

## Prerequisites

Before you begin, ensure you have the following:

- An **Azure Subscription** (e.g., [Free](https://aka.ms/azure-free-account) or [Student](https://aka.ms/azure-student-account))
- macOS, Windows, or Linux
- Python 3.7, 3.8, or 3.9
- [Azure Functions Core Tools](https://docs.microsoft.com/azure/azure-functions/functions-run-local#install-the-azure-functions-core-tools)
- [Visual Studio Code](https://code.visualstudio.com/download) with these extensions installed:
  - [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
  - [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)

## Step 1: Create a Local Azure Functions App

1. Open Visual Studio Code.
2. Open the command palette with `F1`, `Ctrl+Shift+P` (Windows/Linux), or `Cmd+Shift+P` (macOS).
3. Search for and select **Azure Functions: Create New Project**.
4. Choose a folder to create the project, and select it.
5. Follow the prompts:
    - **Language for your project**: `Python`
    - **Python interpreter**: Choose your Python version (3.7, 3.8, or 3.9).
    - **Template for your first function**: `HTTP trigger`
    - **Function name**: `sentiment`
    - **Authorization level**: `anonymous`
    - **How to open new project**: `Open in current window`

Visual Studio Code will open the new project. Key files and folders include:

- `.venv/`: The virtual environment created for the project.
- `sentiment/`:
  - `__init__.py`: The Azure Function code.
  - `function.json`: Metadata for the function.
- `requirements.txt`: Contains Python dependencies for the app.

## Step 2: Install VADER and Modify the Function

1. Open `requirements.txt` and add `vaderSentiment` to install the [VADER Sentiment Analysis library](https://github.com/cjhutto/vaderSentiment).

2. Replace the contents of `sentiment/__init__.py` with the following code:

    ```python
    import azure.functions as func
    from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

    def main(req: func.HttpRequest) -> func.HttpResponse:
        analyzer = SentimentIntensityAnalyzer()
        text = req.params.get("text")
        if not text:
            return func.HttpResponse(
                "Please pass a sentence in the 'text' parameter.",
                status_code=400
            )
        scores = analyzer.polarity_scores(text)
        sentiment = "positive" if scores["compound"] > 0 else "negative"
        return func.HttpResponse(sentiment)
    ```

## Step 3: Run and Debug Locally

1. Start debugging by pressing `F5` or selecting **Debug: Start Debugging** from the command palette.
2. If prompted, install the Azure Functions Core Tools.
3. Once the function app starts, open your browser and navigate to:

    ```
    http://localhost:7071/api/sentiment?text=I+love+coding
    ```

   It should return `positive`.

4. To debug, set a breakpoint in `sentiment/__init__.py`, re-run the URL, and inspect the values in VS Code.

## Step 4: Deploy to Azure

1. In the command palette, select **Azure Functions: Create New Function App in Azure (Advanced)**.
2. Follow the prompts:
    - **Enter a globally unique name**: e.g., `yourname-sentiment-analyzer`
    - **Runtime stack**: Select your Python version.
    - **Resource group**: Select or create a resource group.
    - **Location**: Choose a nearby Azure region.
    - **Hosting plan**: `Consumption`
    - **Storage account**: Create a new one.
    - **Application Insights**: Create a new instance.

3. Deploy the app by selecting **Azure Functions: Deploy to Function App** from the command palette. Choose the created Function App and confirm.

4. After deployment, find the function's HTTP trigger URL in the Azure output panel. Test it by appending a query string, such as:

    ```
    https://<function-app-name>.azurewebsites.net/api/sentiment?text=I+enjoy+learning+Azure+Functions
    ```

   The function should return the sentiment.

## Conclusion

Congratulations! You have built and deployed a serverless Sentiment Analysis API using Python and Azure Functions V2. Feel free to explore the [GitHub Repository](https://github.com/RolandBouwer/Sentiment-Analysis-Azure-Functions) for more details and updates.


