function purchaseBook(book, discountPercentage, taxPercentage, stock, amount, term) {
    if (stock < amount) {
      console.log(`Sorry, we only have ${stock} copies of "${book.title}" by ${book.author} in stock.`);
      return;
    }
    
    let totalPrice = 0;
    let remainingStock = stock;
    
    for (let i = 1; i <= amount; i++) {
      if (remainingStock < 1) {
        console.log(`Sorry, "${book.title}" by ${book.author} is out of stock.`);
        break;
      }
      
      // Calculate the amount of discount
      const discount = book.price * (discountPercentage / 100);
      
      // Calculate the price after discount
      const priceAfterDiscount = book.price - discount;
      
      // Calculate the amount of tax
      const tax = priceAfterDiscount * (taxPercentage / 100);
      
      // Calculate the price after tax
      const priceAfterTax = priceAfterDiscount + tax;
      
      totalPrice += priceAfterTax;
      remainingStock--;
    }
    
    const pricePerTerm = totalPrice / term;
    
    const creditDueEveryMonth = Array.from({ length: term }, (_, i) => {
      const month = i + 1;
      const dueDate = new Date();
      dueDate.setMonth(dueDate.getMonth() + month);
      return { month, dueDate, amount: pricePerTerm.toFixed(2) };
    });
    
    console.log(`You have purchased ${amount} copy/copies of "${book.title}" by ${book.author}.`);
    console.log(`Total Price: ${totalPrice.toFixed(2)}`);
    console.log(`Credit Due Every Month:`, creditDueEveryMonth);
    
    if (remainingStock > 0) {
      console.log(`There are ${remainingStock} copy/copies of "${book.title}" by ${book.author} left in stock.`);
    } else {
      console.log(`"${book.title}" by ${book.author} is out of stock.`);
    }
  }
  