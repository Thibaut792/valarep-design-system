import { CommonModule } from "@angular/common";
import { NewLettersCardComponent } from "./new-letters-card.component";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { NgHeroiconsModule } from "@dimaslz/ng-heroicons";

export default {
    title: 'newletters/NewsLettersPages',
    component: NewLettersCardComponent,
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
} as Meta<NewLettersCardComponent>;

const baseTemplate: Story = (args) => ({
    props: args
});

export const Default = baseTemplate.bind({});

export const SuperTitle = baseTemplate.bind({});
SuperTitle.args = {
    title: 'Super Title',
};