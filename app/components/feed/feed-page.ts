import { EventData, Page } from '@nativescript/core';
import { FeedViewModel } from './feed-view-model';

export function onNavigatingTo(args: EventData) {
  const page = <Page>args.object;
  const vm = new FeedViewModel();
  page.bindingContext = vm;
  vm.loadPosts();
}