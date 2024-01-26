FROM python:alpine3.19
WORKDIR "/home"
ADD transparency.zip .
RUN apk add unzip
RUN unzip transparency.zip
RUN pip install flask
EXPOSE 5001
CMD ["python", "main.py"]
