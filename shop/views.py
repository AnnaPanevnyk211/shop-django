from django.shortcuts import render, get_object_or_404
from .models import Product

def index(request):
    products = Product.objects.all()[:5]
    return render(request, 'shop/index.html', {'products': products})

def product_list(request):
    products = Product.objects.all()
    return render(request, 'shop/product_list.html', {'products': products})

def product_detail(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    return render(request, 'shop/product_detail.html', {'product': product})

def cart(request):
    return render(request, 'shop/cart.html')

