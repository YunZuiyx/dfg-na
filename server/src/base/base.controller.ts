import {BaseEntity, DeleteResult, DeepPartial} from 'typeorm';
import {Body, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query} from '@nestjs/common';
import {BaseService} from './base.service';
import {FindConditions} from 'typeorm/find-options/FindConditions';

export class BaseController<T extends BaseEntity> {
	protected service: BaseService<T>;

	@Get()
	public async find(@Query() query: FindConditions<T>): Promise<T> {
		// console.log(JSON.stringify(query));
		return this.service.findOne(query);
	}

	@Get('/:id')
	public async findOne(@Param('id') id: string) {
		return this.service.findOneById(id);
	}

	 @Post('/')
	public async create(@Body() data: DeepPartial<T>): Promise<T> {
		return this.service.create(data);
	}

	@Put('/:id')
	public async update(@Param('id') id: string, @Body() data: DeepPartial<T>): Promise<T> {
		return this.service.update(id, data);
	}

	@Patch('/:id')
	public async patch(@Param('id') id: string, @Body() data: DeepPartial<T>): Promise<T> {
		return this.service.patch(id, data);
	}

	@Delete('/:id')
	public async delete(@Param('id') id: string): Promise<DeleteResult> {
		return this.service.delete(id);
	}
}
