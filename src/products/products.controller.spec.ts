import { getModelToken } from '@nestjs/mongoose';
import { TestingModule, Test } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

describe('ProductsController', () => {
  let productsController: ProductsController;
  const ProductModel = [
    {
      _id: '62794127127569cd9fe9ec12',
      title: 'MacBook Pro 16',
      price: 2000,
      __v: '0',
    },
  ];

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        ProductsService,
        {
          provide: getModelToken(Product.name),
          useValue: ProductModel,
        },
      ],
    }).compile();

    productsController = moduleRef.get<ProductsController>(ProductsController);
  });

  it('should be define', () => {
    expect(productsController).toBeDefined();
  });
});
