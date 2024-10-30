<?php

namespace Drupal\react_drupal\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Menu\MenuTreeParameters;
use Drupal\Core\Menu\MenuTreeInterface;
use Drupal\menu_link_content\Entity\MenuLinkContent;

/**
 * Provides a 'ReactAppSidebarMenuBlock' block.
 *
 * @Block(
 *   id = "react_app_sidebar_menu_block",
 *   admin_label = @Translation("React App Sidebar Menu Block"),
 * )
 */
class ReactAppSidebarMenuBlock extends BlockBase implements BlockPluginInterface {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Load the menu tree.
    $menu_tree = \Drupal::menuTree();
    $menu_name = 'main'; // The machine name of your menu.
    $parameters = new MenuTreeParameters();
    $parameters->setRoot(""); // Adjust root as needed.

    // Load the menu items.
    $menu_items = $menu_tree->load($menu_name, $parameters);

    // Check if there are menu items to display.
    if (empty($menu_items)) {
      return [
        '#markup' => $this->t('No menu items available.'),
        '#cache' => [
          'max-age' => 0,
        ],
      ];
    }

    // Render the menu.
    return [
      '#theme' => 'menu_tree',
      '#items' => $menu_items,
      '#cache' => [
        'max-age' => 0,
      ],
      '#attached' => [
        'library' => [
          'react_drupal/react_app', // May need to create a separate library.
        ],
      ],
      '#markup' => '<div id="react-app-sidebar-menu-block"></div>', // React mount point.
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    // You can add configuration options for your block here.
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    // Handle form submission.
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheTags() {
    // Return cache tags for the block.
    return CacheableMetadata::createFromRenderArray($this->build())->getCacheTags();
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheMaxAge(): int {
    return 0;
  }
}
