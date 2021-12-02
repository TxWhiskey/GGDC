<script context='module' lang='ts'>

    import type { JournalPost, TextItem} from '$lib/types/journal'

    export async function load () {
            return {
                /* props: {
                    postData: postData
                } */
            }
    }

</script>

<script lang='ts'>

    import { v4 as uuid } from 'uuid'

    const textItem: TextItem = {
        id: uuid(),
        type: '',
        paragraphs: []
    }

    export let postData: JournalPost = {
        id: uuid(),
        published: false,
        sections: [
            {
                id: uuid(),
                rows: [
                    {
                        id: uuid(),
                        columns: [
                            {
                                id: uuid(),
                                items: [
                                    textItem
                                ]
                            },{
                                id: uuid(),
                                items: []
                            }
                        ]
                    }
                ]
            }
        ],
        title: "New Blog Post"
    }

    function addSection( index: number ) {
        postData.sections.splice(index, 0, {
            id: uuid(),
            rows: []
        })
        postData = postData
    }

    function addRowToSection(sectionIndex) {
        postData.sections[sectionIndex].rows.push({
            id: uuid(),
            columns: []
        })
    }

</script>

<div class="journal-heading">
    <ul class="heading-list">
        <li class="heading-list-item">
            <input type="text" placeholder="Post Title" bind:value={postData.title}>
        </li>
        <li class="heading-list-item">
            <button>Save</button>
        </li>
    </ul>
</div>

<div class="post-editor">

    <!-- Sections -->
    {#each postData.sections as section, si}
        <div class="section">
            <h3>Section: {section.id}</h3>

            <div class="section-content">

                <!-- Rows -->
                {#each section.rows as row, ri}

                    <div class="row">
                        <h4>Row: {row.id}</h4>

                        <div class="row-content">

                            <!-- Columns -->
                            {#each row.columns as column, ci}
            
                                <div class="column">

                                    <h4>Column: {column.id}</h4>

                                    <div class="column-content">
                                        <p>COLUMN ID</p>
                                        <p>CONTENT PLACEHOLDER</p>
                                        <p>CONTENT PLACEHOLDER</p>
                                        <p>CONTENT PLACEHOLDER</p>
                                    </div>
                                    
                                    <!-- Column Controls -->
                                    <div class="column-options">
                                        <button class="column-option">Placeholder [COL]</button>
                                    </div>
                
                                </div>

                            {/each}

                        </div>

                        <!-- Row Controls -->
                        <div class="row-options">
                            <button class="row-option">Placeholder [ROW]</button>
                        </div>

                    </div>

                {/each}

            </div>

            <!-- Section Controls -->
            <div class="section-options">
                <button class="section-option" on:click={() => addSection(si)}>Insert Above</button>
                <button class="section-option" on:click={() => addSection(si + 1)}>Insert Below</button>
                <button class="section-option" on:click={() => addSection(si + 1)}>Add Row</button>
            </div>
        </div>

    {/each}

    <button class="add-section" on:click={() => addSection(postData.sections.length)}>Add Section</button>

</div>


<style>

    .journal-heading {
        box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.356);
    }

    .heading-list {
        margin: 0;
        padding: .5rem;
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        list-style-type: none;
    }
    
    .section {
        display: flex;
        flex-flow: column nowrap;
        padding: 1rem;
        gap: 1rem;
        background-color: burlywood;
    }

    .section-options {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
        width: 100%;
        justify-content: center;
    }

    .section:hover .section-options {
        display: flex
    }

    .section-option {
        background-color: transparent;
        color: var(--light-grey);
        font-weight: 600;
        border: none;
    }

    .section-option:hover {
        color: var(--teal);
    }

    .row {
        display: flex;
        flex-flow: column wrap;
        background-color: cadetblue;
        gap: 1rem;
    }

    .row-content {
        display: flex;
        flex-flow: row wrap;
        gap: 1rem;
    }

    .column {
        background-color: darksalmon;
        flex: 1;
    }

    .column-content {
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
    }

    .add-section {
        width: 100%;
        background-color: var(--light-grey);
        color: var(--teal);
        border: none;
        padding: .5rem;
        font-weight: 600;
    }

    .add-section:hover {
        color: white;
        background-color: var(--teal);
    }

</style>