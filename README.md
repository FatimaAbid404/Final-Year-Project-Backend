# Final-Year-Project-Backend
our Project is basically automatic indexing and retrieval on the basis of content present in the video. 
First of all, video is converted in to frames. Frames are passed to the model for text detection. Model detects artificial text and provides result which contains frames(on which bounding boxes are drawn) along with the .txt files. Each frame has corresponding .txt file which contains coordinates. The frames from result are passed into OCR, OCR recognize text present inside the bounding boxes. Text is extracted from the audio present in the video. keywords are then storeed in database which are used for quering later on.
