import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({

    position: {
        page: {
            type: Number,
            index: true
        },
        position: {
            type: Number
        },
        global_position: {
            type: Number
        }
    },
    asin: {
        type: String
    },
    price: {
        discounted: {
            type: Boolean
        },
        current_price: {
            type: Number
        },
        currency: {
            type: String,
            default: 'INR'
        },
        before_price: {
            type: Number
        },
        savings_amount: {
            type: Number
        },
        savings_percent: {
            type: mongoose.Types.Decimal128
        }
    },
    reviews: {
        total_reviews: {
            type: Number
        },
        rating: {
            type: Number
        }
    },
    url: { type: String },
    score: {
        type: mongoose.Types.Decimal128
    },
    sponsored: {
        type: Boolean
    },
    amazonChoice: {
        type: Boolean
    },
    bestSeller: {
        type: Boolean
    },
    amazonPrime: {
        type: Boolean
    },
    title: {
        type: String
    },
    thumbnail: { type: String }

})

const product = mongoose.model('Product', ProductSchema);
export default product;