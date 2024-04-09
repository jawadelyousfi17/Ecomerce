const productCheck = (productName, description, sku) => {
    
    let flag = false
    const productNameRegx = /^[a-zA-Z0-9 \-]+$/
    const nameRegex = /^[a-zA-Z\s]{1,30}$/
    const errors = { type : "validator" , errors : { name: null , description: null, sku: null , price : null } }
    if (productName.length < 4 || !productNameRegx.test(productName)) {
        errors.errors.name='Invalid product name'
        flag = true
    }
    if (sku.length < 3) {
        errors.errors.sku='sku is too short'
        flag = true
    }
    // if (name.length < 4 || !nameRegex.test(name)) {
    //     errors.name.push('invalid name ')
    //     flag = true
    // }
    // if (!usernameRegex.test(username)) {
    //     errors.username.push('username must begin with alpha numeric and contain only alphanumeric and hyphens (-), periods (.), and underscores (_). ')
    //     flag = true
    // }
    if (flag) throw errors
    return 'valid'
}

module.exports = productCheck