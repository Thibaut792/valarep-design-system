import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

export default {
    title: 'Cards/Card',
    component: CardComponent,
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                NgHeroiconsModule
            ],
        })
    ],
    args: {
        title: 'New Card Title !!',
    }
} as Meta<CardComponent>;

const baseTemplate: Story = (args) => ({
    props: args
});

export const Default = baseTemplate.bind({});

export const SuperTitle = baseTemplate.bind({});
SuperTitle.args = {
    title: 'Super Title',
};