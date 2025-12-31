import Item from '../model/itemModel.js';

export const create = async(req,res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

export const getAllItems = async(req,res) => {
    try {
        const items = await Item.find(); 
        if(!items|| items.length === 0){
            return res.status(404).json({ message: 'No items found' });
        }   
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}

export const deleteItem = async(req,res) => {
    try {
        const  id  = req.params.id;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
}