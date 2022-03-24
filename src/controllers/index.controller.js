const getStatus = async (req, res) => {
    res.status(204).json();
};

const getInfo = async (req, res) => {
    res.status(200).json({ "url": req.url })
};

const deleteSecurity = async (req, res) => {
    res.status(401).json()
};

module.exports = {
    getStatus,
    getInfo,
    deleteSecurity
}