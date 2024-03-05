const SavedNews = require("../model/newModel");

exports.getSavedPost = async (req, res) => {
    try {
        const savedNews = await SavedNews.find({ user: req.params.id }).exec();
        if (!savedNews || savedNews.length == 0) {
          res.status(404).json({ message: "No result" });
        }
        res.json(savedNews);
      } catch (error) {
        // Send an error response if there's an issue
        res.status(500).json({ message: error.message });
      }
}

exports.deleteSavedPost = async (req, res) => {
    const id = req.params.id;
    try {
      const deletedDocument = await SavedNews.findByIdAndDelete(id);
  
      if (!deletedDocument) {
        // If document with the given ID does not exist
        return res.status(404).json({ message: "Document not found" });
      }
  
      // If the document was successfully deleted
      res.json({ message: "Document deleted successfully" });
    } catch (error) {
      // Handle errors
  
      console.error("Error deleting document:", error);
  
      res.status(500).json({ message: "Internal server error" });
    }
}
