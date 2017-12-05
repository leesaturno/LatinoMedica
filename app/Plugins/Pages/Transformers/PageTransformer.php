<?php
namespace Plugins\Pages\Transformers;

use League\Fractal;
use Plugins\Pages\Model\Page;
use App\Transformers\LanguageTransformer;

/**
 * Class PageTransformer
 * @package Pages\Transformers
 */
class PageTransformer extends Fractal\TransformerAbstract
{
    /**
     * List of resources possible to include
     * @var array
     */
    protected $availableIncludes = [
        'language'
    ];

    /**
     * @param Page $page
     * @return array
     */
    public function transform(Page $page)
    {
        $output = array_only($page->toArray(), ['id', 'title', 'language_id', 'slug', 'page_content', 'is_active']);
        return $output;
    }

    /**
     * @param Page $page
     * @return Fractal\Resource\Item
     */
    public function includeLanguage(Page $page)
    {
        if ($page->language) {
            return $this->item($page->language, new LanguageTransformer());
        } else {
            return null;
        }

    }

}
